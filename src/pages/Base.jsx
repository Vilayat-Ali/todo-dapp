// Libraries
import { Helmet } from "react-helmet";
import { Fragment } from "react";

const Base = (props) => {
  return (
    <Fragment>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      {props.children}
    </Fragment>
  );
};

export default Base;
