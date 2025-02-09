function MyButton({label}) {
    function handleClick() {
        alert('Button was clicked!');
    }
    return <button onClick={handleClick}>{label}</button>;
}

export default MyButton