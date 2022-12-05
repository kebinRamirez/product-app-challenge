import React, { useEffect, useState } from 'react'
import "../styles/styles.css"
import { platos_type } from '../../constans/constans'
//@ts-ignore
import { useDispatch } from 'react-redux';
import { deletee, editt, search } from '../mainSlice';

interface props {
    platos: Array<platos_type>
}

const ListComponent: React.FC<props> = ({ platos }) => {
    const [currentItem, setCurrentItem]: any = useState(null)
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch();
    const [s, setS] = useState("")

    useEffect(() => {
        if (currentItem != null && edit == false) {
            setName(currentItem.name)
            setPrice(currentItem.price+"")
            setDescription(currentItem.description)
        }
    }, [currentItem])

    return (<>
        <div className="pos">
            <label className='d-flex flex-row'>
                <div className='mx-10'>
                    Buscar:
                </div>
                <input type="form-control mxl-10" name="name" value={s} onChange={(e) => {
                    dispatch(search(e.target.value))
                    setS(e.target.value)
                }} />
            </label>
        </div>
        <div className='contenedor'>
            <div className='contenedor-items' >
                {platos.map((item, index) => {
                    return <button className="card button" key={item.id} onClick={() => {
                        setCurrentItem(item);
                    }}>
                        <img className='image' src={item.image} />
                        <label className='name-product'>{item.name}</label>
                    </button>
                })}
            </div>
            <div className='banner'>
                {currentItem == null ? (
                    <div className='text-product'>
                        Seleccione un producto de la izquierda
                    </div>
                ) : (
                    <div className='sub-banner'>
                        <div className='title'>Product</div>
                        {edit ? (
                            <div className='my-2'>
                                <label>
                                    Nombre:
                                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                </label>

                            </div>
                        ) : (
                            <div className='titlee'>{currentItem.name}</div>
                        )}

                        <div className='row-image'>
                            <div className='image-item'>
                                <img className='imagee' src={currentItem.image} />
                            </div>
                        </div>
                        <div className='flexxs'>
                            <div className='flexx'>
                                {edit ? (
                                    <label>
                                        Precio:
                                        <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                                    </label>
                                ) : (
                                    <div className='price-style'>
                                        {"$"}{currentItem.price}
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className='line' />
                        {edit ? (
                            <label>
                                Descripcion:
                                <textarea className='card-cart' name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </label>
                        ) : (
                            <div className='description'>
                                {currentItem.description}
                            </div>
                        )}
                        <div className='d-flex flex-row'>
                            <button className='button-style button' onClick={() => {
                                setEdit(!edit)
                            }}>
                                {edit ? "cancel edit" : "Edit"}
                            </button>
                            {edit ? (
                                <button className='button-style button' onClick={() => {
                                    const o = {
                                        id: currentItem.id,
                                        name: name,
                                        price: parseInt(price),
                                        description: description,
                                        image: currentItem.image,
                                    }
                                    dispatch(editt(o))
                                    setEdit(false)
                                    setName("")
                                    setPrice("")
                                    setDescription("")
                                    setCurrentItem(o)
                                }}>
                                    Save
                                </button>
                            ) : (
                                <button className='button-styler button' onClick={() => {
                                    dispatch(deletee(currentItem.id))
                                    setEdit(false)
                                    setName("")
                                    setPrice("")
                                    setDescription("")
                                    setCurrentItem(null)
                                }}>
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
    )
};

export default ListComponent;