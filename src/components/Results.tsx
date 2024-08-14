import type { ResultsState } from '../App';

type ResultsProps = {
    results: ResultsState;
};

const Results = ({ results }: ResultsProps) => {
    return (
        <>
            {results.country && (
                <>
                    <div className="results-country">{results.country}</div>
                    <div className="results-city">{results.cityName}</div>
                    <div className="results-temp">
                        {results.temperature}
                        <span>℃</span>
                    </div>
                    <div className="results-condition">
                        <img
                            src={results.icon}
                            alt="icon"
                        />
                        <span>{results.conditionText}</span>
                    </div>
                </>
            )}
        </>
    );
};

export default Results;
