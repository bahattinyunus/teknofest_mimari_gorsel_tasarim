# Katkıda Bulunma Rehberi (Contributing Guide)

TEKNOFEST 2026 Mimari ve Görsel Tasarım projesine katkıda bulunmak istiyorsanız bu rehberi dikkatlice okuyunuz.

---

## 📋 Katkı Türleri

- 🏗️ **Tasarım Dosyaları**: 3D modeller, teknik çizimler, render görselleri
- 🎨 **Grafik Varlıklar**: Logo, ikon, renk paleti, tipografi çalışmaları
- 📄 **Dokümantasyon**: Teknik şartname yorumları, araştırma notları
- 🌐 **Showcase Uygulaması**: React bileşenleri, animasyon iyileştirmeleri
- 🔍 **Rakip Analizi**: Yeni referans projeler, kaynak önerileri

---

## 🚀 Başlangıç

```bash
# Repoyu fork'la ve klonla
git clone https://github.com/KULLANICI_ADIN/teknofest_mimari_gorsel_tasarim.git

# Showcase uygulamasını çalıştır
cd showcase
npm install
npm run dev
```

---

## 🌿 Branch Stratejisi

| Branch | Amaç |
| :--- | :--- |
| `main` | Stabil, son sunum versiyonu |
| `dev` | Aktif geliştirme |
| `feature/kategori-ismi` | Kategori bazlı özellik dalları |
| `fix/aciklama` | Hata düzeltmeleri |

---

## 📂 Dosya Adlandırma Kuralları

- **3D dosyalar**: `YYYY-MM-DD_konsept-ismi_vX.X.blend`
- **Görseller**: `kategori_aciklama_render_vX.png` (max 5MB)
- **Dokümanlar**: `BUYUK_HARF_KELIMELER.md`

---

## ✅ Pull Request Süreci

1. Yeni bir branch oluştur: `git checkout -b feature/ana-sahne-v2`
2. Değişikliklerini yap ve commit et: `git commit -m "feat: Ana sahne podyum tasarımı güncellendi"`
3. Branch'ı push et: `git push origin feature/ana-sahne-v2`
4. GitHub üzerinden Pull Request aç
5. Açıklamada değişikliğinin yarışma şartnamesine uygunluğunu belgele

---

## 💬 Commit Mesaj Formatı

```
<tür>: <kısa açıklama>

Türler: feat | fix | docs | style | refactor | chore
```

**Örnekler:**
```
feat: Ana sahne taşıyıcı sistem modeli eklendi
docs: Grafik konsept renk paleti dokümantasyonu güncellendi
fix: Showcase banner görseli düzeltildi
```

---

## 🏆 Etik Kurallar

- Tüm tasarımlar özgün ve yarışma şartnamesine uygun olmalıdır
- Başkasına ait çalışmalar kaynak gösterilmeden kullanılamaz
- Tüm katkılar [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.tr) lisansı altında paylaşılır
