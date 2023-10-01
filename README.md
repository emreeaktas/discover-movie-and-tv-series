# Movie and TV Series Discovery App

This application allows users to discover trending movies and TV series and filter them by genres. It fetches data from [The Movie Database (TMDb)](https://www.themoviedb.org/) API.

## Features

- Discover trending movies and TV series using [TMDb API](https://www.themoviedb.org/documentation/api)
- Filter movies and TV series by genres
- Authentication system using Context API
- Three types of users:
  - Admin: Access to all components
  - UserWhoCanOnlySeeMovie: Access only to Movie component
  - UserWhoCanOnlySeeTvSeries: Access only to TV Series component
- Sign-up required for accessing any component

## Built With

- [React](https://reactjs.org/)
- [Context API](https://reactjs.org/docs/context.html)
- [Material Dashboard React](https://www.creative-tim.com/product/material-dashboard-react) template by Creative Tim

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.

## Authentication

Authentication is handled using Context API. There are three types of users:

- Admin: Can access all components.
  - Email: admin@gmail.com
  - Password: 123
- UserWhoCanOnlySeeMovie: Can only access the Movie component.
  - Email: UserWhoCanOnlySeeMovie@gmail.com
  - Password: 1234
- UserWhoCanOnlySeeTvSeries: Can only access the TV Series component.
  - Email: UserWhoCanOnlySeeTvSeries@gmail.com
  - Password: 12345

## Usage

1. Sign up for an account.
2. Log in using your credentials.
3. Based on your role, you will have access to different components.

## API

- Trending Movies and TV Series: [TMDb Trending API](https://www.themoviedb.org/documentation/api/discover)
- Movies and TV Series Information: [TMDb API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)

## Contributing

Contributions are welcome. If you find a bug or have a feature request, please open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
----------------------------------------------------------------------------------------------------------------
(Turkce versiyon)
# Film ve Dizi Keşfetme Uygulaması

Bu uygulama, kullanıcıların popüler olan filmleri ve dizileri keşfetmelerine ve bunları türlerine göre filtrelemelerine olanak tanır. Verileri [The Movie Database (TMDb)](https://www.themoviedb.org/) API'sinden alır.

## Özellikler

- [TMDb API'si](https://www.themoviedb.org/documentation/api) kullanılarak popüler olan filmleri ve dizileri keşfedin.
- Filmleri ve dizileri türlerine göre filtreleme.
- Context API kullanarak kimlik doğrulama sistemi.
- Üç türde kullanıcı:
  - Admin: Tüm bileşenlere erişebilir.
  - UserWhoCanOnlySeeMovie: Sadece Film bileşenine erişebilir.
  - UserWhoCanOnlySeeTvSeries: Sadece Dizi bileşenine erişebilir.
- Herhangi bir bileşene erişim için kaydolma zorunluluğu.

## Kullanılan Teknolojiler

- [React](https://reactjs.org/)
- [Context API](https://reactjs.org/docs/context.html)
- Creative Tim tarafından tasarlanmış [Material Dashboard React](https://www.creative-tim.com/product/material-dashboard-react) şablonu

## Başlarken

1. Bu depoyu klonlayın.
2. Bağımlılıkları yüklemek için `npm install` komutunu kullanın.
3. Uygulamayı başlatmak için `npm start` komutunu kullanın.

## Kimlik Doğrulama

Kimlik doğrulama Context API kullanılarak sağlanır. Üç türde kullanıcı bulunmaktadır:

- Admin: Tüm bileşenlere erişebilir.
  - E-posta: admin@gmail.com
  - Şifre: 123
- UserWhoCanOnlySeeMovie: Sadece Film bileşenine erişebilir.
  - E-posta: UserWhoCanOnlySeeMovie@gmail.com
  - Şifre: 1234
- UserWhoCanOnlySeeTvSeries: Sadece Dizi bileşenine erişebilir.
  - E-posta: UserWhoCanOnlySeeTvSeries@gmail.com
  - Şifre: 12345

## Kullanım

1. Bir hesap oluşturun.
2. Kimlik bilgilerinizle giriş yapın.
3. Rolünüze bağlı olarak, farklı bileşenlere erişiminiz olacaktır.

## API

- Popüler Filmler ve Diziler: [TMDb Popüler API'si](https://www.themoviedb.org/documentation/api/discover)
- Film ve Dizi Bilgileri: [TMDb API Belgeleri](https://developers.themoviedb.org/3/getting-started/introduction)

## Katkıda Bulunma

Katkılarınızı bekliyoruz. Bir hata bulursanız veya özellik isteğiniz varsa, lütfen bir konu açın.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.

---

Bu proje [Create React App](https://github.com/facebook/create-react-app) ile başlatılmıştır.
