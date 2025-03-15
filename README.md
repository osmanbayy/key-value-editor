# Key-Value Editor

Bu proje, kullanıcıların key-value (anahtar-değer) çiftleri ekleyerek yapılandırma verilerini yönetmelerini sağlayan basit bir React uygulamasıdır. Kullanıcılar, değerleri manuel olarak girebilir veya panoya kopyalanmış verileri yapıştırarak kolayca ekleyebilirler.

## ✨ Özellikler
- Kullanıcılar key-value çiftleri ekleyebilir ve düzenleyebilir.
- Pano (clipboard) verilerini yapıştırarak otomatik olarak key-value çiftleri oluşturabilir.
- Key'leri benzersiz olacak şekilde kontrol eder ve var olanları günceller.
- Girilen veriler JSON formatında ekranda gösterilir.
- Kullanıcılar istedikleri key-value çiftlerini kaldırabilir.

## 🛠 Kurulum ve Çalıştırma

Projeyi yerel ortamınıza klonlayın:
```sh
git clone https://github.com/osmanbayy/key-value-editor.git
```

Gerekli bağımlılıkları yükleyin:
```sh
npm install
```

Projeyi başlatın:
```sh
npm run dev
```

## 🌐 Kullanım
1. Açılan arayüzde `Key` ve `Value` giriş alanları bulunmaktadır.
2. Manuel olarak anahtar-değer çiftleri girebilir veya panodan yapıştırabilirsiniz.
3. `Yeni Ekle` butonu ile yeni bir çift ekleyebilirsiniz.
4. `×` butonu ile mevcut satırları silebilirsiniz.
5. Alt bölümde, mevcut tüm girişler JSON formatında görüntülenir.

## 🔧 Teknolojiler
Bu proje aşağıdaki teknolojiler kullanılarak geliştirilmiştir:
- React.js
- Tailwind CSS

## 🌟 Katkıda Bulunma
Her türlü katkı ve geri bildirim için pull request veya issue açabilirsiniz.
