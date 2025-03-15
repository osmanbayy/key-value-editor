import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      key: "",
      value: "",
    },
  ]);

  const handlePaste = (e, index) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    if (pastedData) {
      const pastedArray = pastedData
        .split("\n")
        .map((text) => {
          if (/([\w]+)=(.+?)/.test(text)) {
            let [key, value] = text.split("=");
            let find = items.find((i) => i.key === key);
            if (!find || find?.key === items[index].key) {
              return { key, value };
            }
          }
        })
        .filter(Boolean);
      if (pastedArray.length > 0) {
        setItems((items) => [
          ...items.slice(0, index),
          ...pastedArray,
          ...items.slice(index + 1),
        ]);
      }
    }
  };

  return (
    <div className="h-[100vh] bg-zinc-900 p-2 lg:px-60">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-2 gap-x-4">
          <label className="text-sm text-white/50 my-2">Key</label>
          <label className="text-sm text-white/50 my-2">Value</label>
        </div>
        <div className="grid gap-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-x-4">
              <input
                onPaste={(e) => handlePaste(e, index)}
                onChange={(e) => {
                  setItems((items) =>
                    items.map((item, i) => {
                      if (i === index) {
                        item.key = e.target.value;
                      }
                      return item;
                    })
                  );
                }}
                placeholder="Örn. API_URL"
                className="flex-1 h-10 bg-white/5 border border-white/20 text-sm px-3 text-white outline-none placeholder:text-white/50 rounded-lg"
                type="text"
                value={item.key}
              />

              <input
                onChange={(e) => {
                  setItems((items) =>
                    items.map((item, i) => {
                      if (i === index) {
                        item.value = e.target.value;
                      }
                      return item;
                    })
                  );
                }}
                placeholder="Örn. http://localhost:8000"
                className="flex-1 h-10 bg-white/5 border border-white/20 text-sm px-3 text-white outline-none placeholder:text-white/50 rounded-lg"
                type="text"
                value={item.value}
              />
              {items.length > 1 && (
                <button
                  onClick={() =>
                    setItems((items) => items.filter((_, key) => key !== index))
                  }
                  className="h-7 w-7 -ml-2 cursor-pointer flex items-center justify-center text-xl text-white/50 rounded-full border hover:text-white/60"
                >
                  &times;
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={() =>
            setItems((items) => [
              ...items,
              {
                key: "",
                value: "",
              },
            ])
          }
          className="rounded px-4 py-1 border border-zinc-700 text-white/70 mt-5 cursor-pointer hover:bg-zinc-700 transition duration-300"
        >
          Yeni Ekle
        </button>
        <pre className="bg-white/10 rounded-lg p-3 text-white/50 mt-5">
          {JSON.stringify(items, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App;
