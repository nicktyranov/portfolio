import { useParams } from 'react-router-dom';
import { data } from '../components/Filter/filterData';

export default function ProjectInfo() {
   const { id } = useParams();
   console.log(id);
   const product = data.find((el) => el.id == id);
   console.log(product);

   if (!product) {
      return <div>Product not found</div>;
   }

   return <div>{product.name}</div>;
}
