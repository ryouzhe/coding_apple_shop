import React, { useEffect, useRef, useState } from "react";
import { Nav } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

let Box = styled.div`
  padding: 20px;
`;

let BoxContent = styled.h4`
  font-size: 25px;
  color: ${(props) => props.contentColor};
`;

function Detail(props) {
  const alertDiv = useRef();
  let { id } = useParams();
  let history = useHistory();
  let item = props.shoes.find(function (data) {
    return data.id === parseInt(id);
  });

  let [alert, alertChange] = useState(true);
  let [selectedTab, changeSelectedTab] = useState(0);
  let [aniSwitch, changeAniSwitch] = useState(false);
  // let [inputText, inputTextChange] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      //  alertDiv.current.className = "my-alert-disable";
      alertChange(false);
      console.log("Box hidden");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]); // 두 번째 파라미터는 실행될 조건... 빈 배열은 업데이트될 때 실행되지 않은다... 첫 렌더링만 실행한다

  return (
    <div className="container">
      <Box>
        <BoxContent className="red">Box Div</BoxContent>
      </Box>

      {/* <input
        onChange={(e) => {
          inputTextChange(e.target.value);
          console.log(inputText);
        }}
      /> */}

      {alert === true ? (
        <div className="my-alert-enable" ref={alertDiv}>
          <p>재고가 얼마남지 않았습니다!!</p>
        </div>
      ) : null}

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
          <Info qty={props.qty}></Info>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.changeQty([9, 10, 11]);
              props.dispatch({
                type: "ADDITEM",
                payload: { id: item.id, name: item.title, quan: 1 },
              });
              history.push("/cart");
            }}
          >
            주문하기
          </button>
          &nbsp;
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

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              changeSelectedTab(0);
              changeAniSwitch(false);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              changeSelectedTab(1);
              changeAniSwitch(false);
            }}
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={aniSwitch} classNames="wow" timeout={500}>
        <TabContent
          selectedTab={selectedTab}
          changeAniSwitch={changeAniSwitch}
        />
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.changeAniSwitch(true);
  });

  if (props.selectedTab === 0) {
    return <div>0번째 내용입니다.</div>;
  } else {
    return <div>1번째 내용입니다.</div>;
  }
}

function Info(props) {
  return <p>재고: {props.qty[0]}</p>;
}

function 함수명(state) {
  // state를 props 화.. store 안의 state를 props화
  console.log(state);
  return {
    state: state.reducer,
    alertState: state.reducer2,
  };
}

export default connect(함수명)(Detail);

// export default Detail;
