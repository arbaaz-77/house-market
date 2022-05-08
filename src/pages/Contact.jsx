import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

const Contact = () => {
  const [landlord, setLandlord] = useState(null);

  const params = useParams();

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, "users", params.landlordId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Couldnt get landlord details");
      }
    };

    getLandlord();
  }, [params.landlordId]);

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Contact Landlord</p>
      </header>
      {landlord !== null && (
        <main>
          <div className="contactLandlord">
            <p className="landlordName">Contact {landlord?.name}</p>
            <a href={`mailto:${landlord.email}`}>
              <button type="button" className="primaryButton">
                Send Message
              </button>
            </a>
          </div>
        </main>
      )}
    </div>
  );
};

export default Contact;
