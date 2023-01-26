import './styles.css';
function FoodbankItem({ name, address, image, guid}) {
  const source = 'data:image/png;base64,'.concat(' ').concat(image);
  const url = '/foodbanks/'.concat(guid);
  return (
    
    <div className='foodbank-item'>
      <img src={source}></img>
      {name}
      {address}
      <a href={url}>Icon</a>
    </div>
  );
}
export default FoodbankItem;