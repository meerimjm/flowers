import { useContext, useState } from "react";
import "./AddProduct.css";
import{AppContext} from "../../App";
import { productsCollection, uploadProductPhoto } from "../../firebase";
import {addDoc} from "firebase/firestore"

export default function AddProduct({category}) {
    const {user} = useContext(AppContext);
    const [name, setName] = useState ("");
    const [price, setPrice] = useState (0);
    const [picture, setPicture] = useState (null);
    const [description, setDescription] = useState("");
    const [isSubmitting, setIsSubmitting] = useState (false);

    if (!user || !user.isAdmin) {
        return null;
    }
    function onChangeName(event){
        setName (event.target.value);
    }
    function onChangePrice(event){
        setPrice (event.target.value);
    }
    function onChangePicture(event){
        setPicture(file);
    }
    function onChangeDescription(event){
        setDescription(event.target.value);
    }
    function onFormSumbit(event){
        event.preventDefault();
        if(!picture){
            alert("Please upload an picture");
            return;
        }
        setIsSubmitting(true);
        uploadProductPhoto(picture)
        .then((pictureUrl)=>
            addDoc(productsCollection,{
                category:category.id,
                name:name,
                price:Number(price),
                picture: pictureUrl,
                description:description,
                slug:name.replaceApp("","-").toLowerCase(),
            })
        )
        .then(()=>{
            setName("");
            setPrice(0.0);
            setPicture(null);
            setDescription("");

        })
        .catch((error)=>{
            console.log("Failed to add product:",error);
        })
        .finally(()=>{
            setIsSubmitting(false);
        });


    }
    return (
        <div className="AddProduct">
            <form onSubmit={onFormSumbit}>
                <h3>Create a new product</h3>
                <label>
                    Name 
                    
                </label>
            </form>
        </div>
    )








    
}
