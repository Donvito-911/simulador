const Form = (props) => {
    const changeQueryHandler = (event) => {
        props.onChangeForm(event);
      }
    return (
        <form style={{width:"35%",backgroundColor:"white", padding: "2rem", borderRadius: ".5rem", display:"flex", justifyContent:"space-between"}}>
            <label htmlFor="attr_0">
                Medio de transporte:&nbsp;&nbsp;
                <select id="attr_0" name="attr_0" onChange={changeQueryHandler}>
                    {props.options.attr_0.map(x => <option value={x} key={x}>{x}</option>) ?? false}
                </select>
            </label>
            <label htmlFor="zone_0">
                Zona de origen:&nbsp;&nbsp;
                <select id="zone_0" name="zone_0" onChange={changeQueryHandler}>
                    {props.options.zone_0.map(x => <option value={x} key={x}>{x}</option> ?? false)}
                </select>
            </label>
        </form>);
};

export default Form;