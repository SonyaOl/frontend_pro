 function Form() {
 return (
    <>
 <form className="form js--form">
            <input type="text" name="value" required className="form__input js--form__input"
                placeholder="Що потрібно зробити?"/>
    <button className="form__btn">Додати</button>
        </form>
        </>
        )
 }

 export default Form