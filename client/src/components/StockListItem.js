import '../styles.css';

function StockListItem({ name, image, description, guid}) {
  const source = 'data:image/png;base64,'.concat(' ').concat(image);
  const url = '/items/'.concat(guid);
  return (
    
    <div className='list-item'>
      <img src={source} alt='Stock Item' className='list-image'/>
      {name}
      {description}
      <a href={url}>More information icon</a>
    </div>
  );
}
export default StockListItem;