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
