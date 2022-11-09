import { useAppContext } from "../store/store";
import Layout from "../components/layout";
import Book from "../components/Book"

export default function PrincipalPage() {
  const store = useAppContext();
  
  return (
    <Layout>
      {store.items.map((item) => (
       <Book key={item.id} item={item}/>
      ))}
    </Layout>
  );
}
