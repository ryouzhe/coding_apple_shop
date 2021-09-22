import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { connect } from "react-redux";

function Cart(props) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  console.log(state);
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {state.reducer.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.quan}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch({ type: "INCREAMENT", payload: data.id });
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "DECREAMENT", payload: data.id });
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          );
        })}
      </Table>
      {state.reducer2 === true ? (
        <div className="my-alert-enable">
          <p>지금 구매하시면 신규할일 20%</p>
          <button
            onClick={() => {
              dispatch({ type: "CLOSE" });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}

// function 함수명(state) {
//   // state를 props 화.. store 안의 state를 props화
//   console.log(state);
//   return {
//     state: state.reducer,
//     alertState: state.reducer2,
//   };
// }

// export default connect(함수명)(Cart);

export default Cart;
