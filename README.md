<div align="center">

# BELAJAR REACT JS

</div>

## Instal React Dengan Vite Js
```
npm create vite@latest lern-react -- --template-react

cd lern-react

npm install

npm run dev
```

Sumber: [Parsinta](https://www.youtube.com/watch?v=EWK_YiJg1X0&list=PLRKMmwY3-5MwC02nYlx4kgyNO0fRvPdDc&index=1&t=274s)


## Prettier

### Install Prettier

```
npm install --save-dev --save-exact prettier
```

### Cara Menggunakan Prettier

* Buat file baru di root dengan nama `.prettierrc.json`

* Masukan Rules

```
{
  "tabWidth": 4,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "semi": true,
}
```

* Pindahkan NPX

Pindahkan code `npx` ke dalam file `package.json` lalu masukan kode di bawah ini pada file tersebut di bagian `scripts`

```
"format": "npm prettier --write .", 
```

Jalankan 
```
npm run format
```

Sumber: [Parsinta](https://youtu.be/XUaniwUb5PM?list=PLRKMmwY3-5MwC02nYlx4kgyNO0fRvPdDc&t=26)
