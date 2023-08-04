<div align="center">

# BELAJAR REACT JS

</div>

## #Instal React Dengan Vite Js
```
npm create vite@latest lern-react -- --template react

cd lern-react

npm install

npm run dev
```

Sumber: [Parsinta](https://www.youtube.com/watch?v=EWK_YiJg1X0&list=PLRKMmwY3-5MwC02nYlx4kgyNO0fRvPdDc&index=1&t=274s)


## #Prettier

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
"format": "npx prettier --write .", 
```

Jalankan 
```
npm run format
```

Sumber: [Parsinta](https://youtu.be/XUaniwUb5PM?list=PLRKMmwY3-5MwC02nYlx4kgyNO0fRvPdDc&t=26)


## #Satu Component Mempunyai Banyak Component

* Buat Component Baru
* Tambahkan Code di Bawah ini Pada Component Yang Telah Dibuat

```javascript
function Card({ children }) {
    return <div className='border rounded overflow-hidden'>{children}</div>;
}

function Title({ children }) {
    return <h1 className='p-4 text-xl font-medium border-b'>{children}</h1>;
}

function Excerpt({ children }) {
    return <p className="p-4">{children}</p>
}

function Footer({ children }) {
    return <div className="bg-slate-50 p-4 flex justify-end">{children}</div>
}

Card.Title = Title;
Card.Excerpt = Excerpt;
Card.Footer = Footer;

export default Card;
```

* Import Card Ke dalam App.jsx
```javascript
 import Button from './components/Button';
import Card from './components/Card';

export default function App() {
    return (
        <div className='w-[1100px] mx-auto my-20 grid grid-cols-3 gap-5'>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
            <Card>
                <Card.Title>Hello World</Card.Title>

                <Card.Excerpt>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquid nulla quibusdam ex sunt sint molestias labore magni quam quod?</Card.Excerpt>
            
                <Card.Footer><Button>Read More</Button></Card.Footer>
            </Card>
        </div>
    );
}

```

Sumber: [Parsinta](https://youtu.be/E3EjPZdjB_o?list=PLRKMmwY3-5MwC02nYlx4kgyNO0fRvPdDc&t=510)


## #React Router

* Install React Router

```
npm install react-router-dom
```

* Buka file main.jsx

```javascript
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
```

* Definisikan router

```javascript
const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
]);
```

* Tambahkan kode di bawah ini pada ` <React.StrictMode> `

```javascript
<RouterProvider router={router} />
```

* Import pages login

```javascript
import LoginPage from './pages/login';
```


Sumber: [Vip Code Studio](https://www.youtube.com/watch?v=SYJpUJmYBRk&list=PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz&index=6&t=525s)



## #Client Side Routing

* Ganti tag ` a href ` menjadi ` <Link to='/login'></Link> `
* ` import {Link} from 'react-router-dom'; `


Sumber: [Vip Code Studio](https://youtu.be/SYJpUJmYBRk?list=PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz&t=752)


## #Counter Dengan Class Component

* Definisikan state dengan cara
  
  ```javascript
  constructor(props) {
    super(props);
    this.state = {
      count: 0    
    };
  }
  ```

* Tampilkan hasil count
    
  ```javascript
  {this.state.count}
  ```

* Update state dengan event handling

  ```javascript
  onClick{() => this.setState({count: this.state.count + 1})}
  ```

Sumber: [Vip Code Studio](https://youtu.be/qHQv_cRmJiQ?list=PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz&t=399)

## #Cara membuat penulisan ribuan yang benar pada integer pada javascript

```javascript
{price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}
```

Sumber: [Vip Code Studio](https://youtu.be/ptx1eNK-DuY?list=PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz&t=379)


## #Rendering List Dengan map()

```javascript
{products.map((product) => (
  <Card.Cards key={product.id}>
    <Card.ImageProduct>{product.image}</Card.ImageProduct>
    <Card.NamePruduct>{product.name}</Card.NamePruduct>
    <Card.PriceProduct>{product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</Card.PriceProduct>
    <Card.AddToCart />
  </Card.Cards>
))}
```

Sumber: [Vip Code Studio](https://youtu.be/Z_omTIQL5pw?list=PLmF_zPV9ZcP346sttD4Vs2VROLlIp5kPz&t=167)
