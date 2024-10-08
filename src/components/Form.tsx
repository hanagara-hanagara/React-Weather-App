type FormProps = {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
    city: string;
};

const Form = ({ getWeather, setCity, city }: FormProps) => {
    return (
        <form onSubmit={getWeather}>
            <input
                type="text"
                name="city"
                placeholder="都市名"
                onChange={e => setCity(e.target.value)}
                value={city}
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;
