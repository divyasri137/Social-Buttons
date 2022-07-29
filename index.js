const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
  //  Write your code here.
};

const element = (
  <div className="container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button buttonText="Like" className="like-button" />
      <Button className="comment-button" buttonText="Comment" />
      <Button className="share-button" buttonText="Share" />
    </div>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
