import './stylesheet/ProductDisc.css'
import { useState } from 'react';

const ProductDisc = () => {
    

    const ImgUrl = localStorage.getItem('ImgURl');
    const Name = localStorage.getItem('Name');
    const description = localStorage.getItem('description');
    const price = localStorage.getItem('Price');
    const quantity = localStorage.getItem('quantity');
    const q_count = localStorage.getItem('count');
    var qun_count = parseInt(q_count);
    const [count, SetCount] = useState(qun_count);
    const [text, SetText] = useState("");

  

    var des_text;
    var amount = count * parseInt(price);
    if (description === null) {
        des_text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates."
    } else {
        des_text = description;
    }
    return (
        <div className="ProductDisc">
            <div className="ProductImg">
                <img src={ImgUrl} alt="Product image" />
            </div>
            <div className="ProductDescription">
                <h4>{Name}</h4>
                <p>{des_text}</p>
                <p>Unit Price : {price} </p>
                <h4>Net Amount : {amount}.00</h4>
                <div className='quantity'>
                    <h4 style={{
                        color: count > quantity ? "#690816" : "#2e0c11 "
                    }}>Quantity : {count}{text}</h4>
                    <button
                        onClick={() => {
                            if (count >= quantity) {
                                SetText(" Out of Stock")
                            } else {
                                SetCount(count + 1);
                                SetText("")
                            }

                        }}
                    >+</button>
                    <button
                        onClick={() => {
                            if (count > quantity) {
                                SetCount(quantity);
                                SetText("")
                            } else if (count > 1 && count <= quantity) {
                                SetCount(count - 1);
                                SetText("")
                            }
                        }}
                    >-</button>
                    <div className='payButtons'>
                        <button className='payNow'>Pay Now</button>
                        <button className='addToCart'>Add to Cart</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDisc;