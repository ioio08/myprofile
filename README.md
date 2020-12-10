# My-Profile
## 履歴書には書ききれない、パーソナルな部分に焦点を当てたサイトです。
### アクセス：https://profile-1st.netlify.app/

<img width="851" alt="Profile" src="https://user-images.githubusercontent.com/66821960/101805759-7a4c9e80-3b56-11eb-8daf-2e0ab6a072e0.png">


## 使用言語

 -  HTML　<img width= '20px'  src="https://cdn.svgporn.com/logos/html-5.svg">

 -  SCSS　<img width= '30px'  src="https://cdn.svgporn.com/logos/sass.svg">

 -  JavaScript　<img width= '25px'  src="https://cdn.svgporn.com/logos/javascript.svg">


## - 構成

1. `個人情報`（名前、生年月日、出身地、特技、趣味）

1. `経歴`（中学校〜大学まで：  年代、学校名、特筆する出来事、実績、）

1. `プログラミング学習`について（言語ごとの学習期間、学習目的、短期目標）

1. `制作物`について（詳細は紹介しているポートフォリオサイトをご確認ください。）

1. `お問い合わせ`（私の管理するメールアドレスに届きます。）


## - 工夫ポイント

### 1. SCSSをBEM記法を基に作成しました。 (/index.html L40 ~ 70, /style.scss L319 ~ 330)
#### (ネストが深くなりすぎない、ハードコーディングをしない事なども意識しました。)

```
////  index.html  ////

<div id="Profile" class="title">
      <h2>Profile</h2>
    </div>
    <div class="profile-container">
      <div class="profile-container__profile-list">

      <!-- 省略 -->

      <div class="profile-container__profile-images">

//// style.scss  ////

.profile-container {
  margin-bottom: 5em;
  display: flex;
  justify-content: center;

  /* tab から縦方向・中央寄せ*/
  @include mq(tab) {
    flex-direction: column-reverse;
    align-items: center;
  }

  &__profile-list {
    width: 48%;

```

### 2. Netlify Forms を利用して、メッセージが届く様に設定しました。 ( /index.html L341 )

```
////  index.html  ////
<form  name="contact " method="POST" data-netlify="true">
```


### 3. スクロールイベントで、各コンテンツが表示される様に設定しました。 ( /index.html L21 , /index.js L14 ~ 40 ,  /style.scss L208 ~ 211 )

```

////  index.html  ////

<div id="Navigation" class="title">

//// index.js  ////

window.addEventListener("scroll", () => {
  const nav = document.getElementById("Navigation");

  <!- 省略 ->

  if (scrollTop >= 0 && scrollTop <= 679 ) {
    nav.classList.add('fade-in');

////  style.scss  ////

.fade-in {
  opacity: 1;
  transition: 3s;
}
```