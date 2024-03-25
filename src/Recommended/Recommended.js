import Button from "../components/Button";
import "./Recommended.css";


function Recommended ({handleClick}) {
  return (
    <>
     <h2 className="recommended-title">Recommended</h2>
     <div className="recommended-flex">
     <Button onClickHandler={handleClick} value="" title="All"/>
     <Button onClickHandler={handleClick} value="Nike" title="Nike"/>
     <Button onClickHandler={handleClick} value="Adidas" title="Adidas"/>
     <Button onClickHandler={handleClick} value="Puma" title="Puma"/>
     <Button onClickHandler={handleClick} value="Vans" title="Vans"/>
     </div>
    </>
  );
};

export default Recommended;