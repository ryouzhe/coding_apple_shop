import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let Box = styled.div`
  padding: 20px;
`;

let BoxContent = styled.h4`
  font-size: 25px;
  color: ${(props) => props.contentColor};
`;

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();
  let item = props.shoes.find(function (data) {
    return data.id === parseInt(id);
  });

  return (
    <div className="container">
      <Box>
        <BoxContent className="red">Box Div</BoxContent>
      </Box>
      <div className="my-alert2">
        <p>재고가 얼마남지 않았습니다!!</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (item.id + 1) +
              ".jpg"
            }
            width="100%"
            alt=""
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
          <button className="btn btn-danger">주문하기</button>&nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
