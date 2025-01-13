import Loading from "../../components/loading";
import Container from "./container";

export default async function Page() {
  return <Loading childern={<Container />}></Loading>;
}
