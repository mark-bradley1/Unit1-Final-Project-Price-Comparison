const Button = ({ id, type, label, handleClick }) => {
    return (
        <button id={id} type={type} onClick={handleClick}>
            {label}
        </button>
    );
};

export default Button;
