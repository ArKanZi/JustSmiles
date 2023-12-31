import { collection, getCountFromServer } from "firebase/firestore";
import { firestore } from "../services/firebase";

async function getPostlikes(postDocId) {
  const likesRef = collection(
    collection(firestore, "posts"),
    postDocId,
    "likes"
  );
  const snapshot = await getCountFromServer(likesRef);

  const likes = snapshot.data().count;

  return likes;
}
export default getPostlikes;
