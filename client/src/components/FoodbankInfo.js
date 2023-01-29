import '../styles.css';
function FoodbankInfo({ name, address, image, guid}) {
  const source = 'data:image/png;base64,'.concat(' ').concat(image);

  return (
    <div className='list-item'>
      <img src={source} alt='Image of the foodbank' className='list-image'/>
      {name}
      {address}
      {guid}
      Other information/fields will be added here
    </div>
  );
}
export default FoodbankInfo;