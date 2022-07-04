import { handleData } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState, useCallback } from "react";
// or less ideally
import { Button, Modal } from "react-bootstrap";
const data = [
  {
    No: 1,
    StudentName: "Robert Fox",
    Class: "8th",
    Result: <p className="pass">Passed</p>,
    Score: "78 / 100",
    Grade: <p className="Excellent">Excellent</p>,
  },
  {
    No: 2,
    StudentName: "Ralph Edwards",
    Class: "7th",
    Result: <p className="fail">Failed</p>,
    Score: "20 / 100",
    Grade: <p className="Poor">Poor</p>,
  },
  {
    No: 3,
    StudentName: "Esther Howard",
    Class: "9th",
    Result: <p className="pass">Passed</p>,
    Score: " 60 / 100",
    Grade: <p className="Average">Average</p>,
  },
  {
    No: 4,
    StudentName: "Eleanor Pena",
    Class: "8th",
    Result: <p className="pass">Passed</p>,
    Score: " 60 / 100",
    Grade: <p className="Average">Average</p>,
  },
  {
    No: 5,
    StudentName: "Arlene McCoy",
    Class: "7th",
    Result: <p className="pass">Passed</p>,
    Score: "85 / 100",
    Grade: <p className="Excellent">Excellent</p>,
  },
  {
    No: 6,
    StudentName: "Marvin McKinney",
    Class: "9th",
    Result: <p className="fail">Failed</p>,
    Score: "25 / 100",
    Grade: <p className="Poor">Poor</p>,
  },
  {
    No: 7,
    StudentName: "Wade Warren",
    Class: "7th",
    Result: <p className="pass">Passed</p>,
    Score: "90 / 100",
    Grade: <p className="Excellent">Excellent</p>,
  },
];

export default function Right() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // let data1;
  const [Data1, newData1] = useState(data);
  const [addData, setTheData] = useState({
    No: "",
    StudentName: "",
    Class: "",
    Result: "",
    Score: "",
    Grade: "",
  });

  const handleAddData = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addData };
    newFormData[fieldName] = fieldValue;

    setTheData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = {
      No: "",
      StudentName: addData.StudentName,
      Class: addData.Class,
      Result: addData.Result,
      Score: addData.Score,
      Grade: addData.Grade,
    };
    const newDatas = [...Data1, newData];
    newData1(newDatas);
    console.log(newData1(newDatas));
  };
  // const onChange = (e) => {
  //   setTheArray([...data2, data1]);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  // const removeEntryClick = () => {
  //   setTheArray();
  // };
  // handleData = (event) => {
  //   event.target.getAttribute();
  // };

  // const handleData = (event) => {
  //   event.preventDefault();

  //   const fieldValue = event.target.value;
  // };
  const Level = () => {
    if (handleData >= 76) {
      return <p className="Excellent">Excellent</p>;
    }
    if (handleData < 76 && handleData < 30) {
      <p className="Average">Average</p>;
    } else {
      return <p className="Poor">Poor</p>;
    }
  };
  const Level2 = () => {
    if (handleData < 30) {
      return <p className="pass">Passed</p>;
    } else {
      return <p className="fail">Failed</p>;
    }
  };

  return (
    <>
      <div className="Studentsrgt">
        <h1>Students</h1>
      </div>
      <div>
        <button onClick={handleShow}>
          <svg
            className="Button"
            width="163"
            height="82"
            viewBox="0 0 163 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_18_2297)">
              <rect
                x="20"
                y="18"
                width="123"
                height="42"
                rx="10"
                fill="#2CA4D8"
                shape-rendering="crispEdges"
              />
              <path
                d="M71 40H65V46H63V40H57V38H63V32H65V38H71V40Z"
                fill="white"
              />
              <path
                d="M85.3496 35.373L82.376 44H80.5781L84.3242 34.0469H85.4727L85.3496 35.373ZM87.8379 44L84.8574 35.373L84.7275 34.0469H85.8828L89.6426 44H87.8379ZM87.6943 40.3086V41.6689H82.2803V40.3086H87.6943ZM94.8984 44H92.7725L92.7861 42.6396H94.8984C95.5137 42.6396 96.0286 42.5052 96.4434 42.2363C96.8626 41.9674 97.1771 41.5824 97.3867 41.0811C97.6009 40.5798 97.708 39.9827 97.708 39.29V38.75C97.708 38.2122 97.6465 37.736 97.5234 37.3213C97.4049 36.9066 97.2272 36.5579 96.9902 36.2754C96.7578 35.9928 96.4707 35.7786 96.1289 35.6328C95.7917 35.487 95.402 35.4141 94.96 35.4141H92.7314V34.0469H94.96C95.6208 34.0469 96.2246 34.1585 96.7715 34.3818C97.3184 34.6006 97.79 34.9173 98.1865 35.332C98.5876 35.7467 98.8952 36.2435 99.1094 36.8223C99.3236 37.401 99.4307 38.0482 99.4307 38.7637V39.29C99.4307 40.0055 99.3236 40.6527 99.1094 41.2314C98.8952 41.8102 98.5876 42.307 98.1865 42.7217C97.7855 43.1318 97.307 43.4486 96.751 43.6719C96.1995 43.8906 95.582 44 94.8984 44ZM93.7227 34.0469V44H92.0068V34.0469H93.7227ZM105.295 44H103.169L103.183 42.6396H105.295C105.91 42.6396 106.425 42.5052 106.84 42.2363C107.259 41.9674 107.574 41.5824 107.783 41.0811C107.997 40.5798 108.104 39.9827 108.104 39.29V38.75C108.104 38.2122 108.043 37.736 107.92 37.3213C107.801 36.9066 107.624 36.5579 107.387 36.2754C107.154 35.9928 106.867 35.7786 106.525 35.6328C106.188 35.487 105.799 35.4141 105.356 35.4141H103.128V34.0469H105.356C106.017 34.0469 106.621 34.1585 107.168 34.3818C107.715 34.6006 108.187 34.9173 108.583 35.332C108.984 35.7467 109.292 36.2435 109.506 36.8223C109.72 37.401 109.827 38.0482 109.827 38.7637V39.29C109.827 40.0055 109.72 40.6527 109.506 41.2314C109.292 41.8102 108.984 42.307 108.583 42.7217C108.182 43.1318 107.703 43.4486 107.147 43.6719C106.596 43.8906 105.979 44 105.295 44ZM104.119 34.0469V44H102.403V34.0469H104.119Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_18_2297"
                x="0"
                y="0"
                width="163"
                height="82"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.219608 0 0 0 0 0.709804 0 0 0 0 0.921569 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_18_2297"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_18_2297"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>

      <div className="Square  ">
        <div className="Table1">
          <table>
            <tr>
              <th>No</th>
              <th>StudentName</th>
              <th>Class</th>
              <th>Result</th>
              <th>Score</th>
              <th>Grade</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.No}</td>

                  <td>{val.StudentName}</td>
                  <td>{val.Class}</td>
                  <td className="result">{val.Result}</td>
                  <td>{val.Score}</td>
                  <td>{val.Grade}</td>
                  <td>
                    <button onClick={handleShow}>
                      <svg
                        className="edit"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.75 14.25H2.66667L12.7708 4.14584L12.3125 3.6875L11.8542 3.22917L1.75 13.3333V14.25ZM0.5 15.5V12.8333L12.75 0.583336C12.9861 0.347225 13.2812 0.232642 13.6354 0.239586C13.9896 0.24653 14.2847 0.368058 14.5208 0.604169L15.4167 1.5C15.6528 1.73611 15.7708 2.02778 15.7708 2.375C15.7708 2.72222 15.6528 3.01389 15.4167 3.25L3.16667 15.5H0.5ZM14.4583 2.35417L13.6042 1.5L14.4583 2.35417ZM12.7708 4.14584L12.3125 3.6875L11.8542 3.22917L12.7708 4.14584Z"
                          fill="#2CA4D8"
                        />
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button onClick={handleShow2}>
                      <svg
                        className="delete"
                        width="12"
                        height="16"
                        viewBox="0 0 12 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.25 14.25H9.75V4.25H2.25V14.25ZM0.375 2.58333V1.33333H3.16667L4 0.5H8L8.83333 1.33333H11.625V2.58333H0.375ZM2.25 15.5C1.91667 15.5 1.625 15.375 1.375 15.125C1.125 14.875 1 14.5833 1 14.25V3H11V14.25C11 14.5833 10.875 14.875 10.625 15.125C10.375 15.375 10.0833 15.5 9.75 15.5H2.25ZM2.25 14.25H9.75H2.25Z"
                          fill="#2CA4D8"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add student</Modal.Title>
            </Modal.Header>

            <Modal.Body className="addBody">
              <label className="studentName">STUDENT NAME* </label>
              <input
                className="studentinput"
                type="text"
                name="StudentName"
                onChange={handleAddData}
                required
              />

              <label label className="class">
                CLASS*
              </label>
              <input
                className="classinput"
                type="number"
                name="Class"
                onChange={handleAddData}
                required
              />
              <p className="classP">Please input values between 1 & 12</p>

              <label className="score">SCORE* </label>
              <input
                className="scoreinput"
                type="number"
                name="Score"
                onChange={handleAddData}
                required
              />
              <p className="scoreP">Please input values between 0 & 100 </p>
              <label className="res" name="Result" onChange={handleAddData}>
                RESULT{" "}
              </label>
              <p className="res1">{Level2()}</p>
              <label className="gra" name="Grade" onChange={handleAddData}>
                GRADE{" "}
              </label>
              <p className="gra1">{Level()}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button
                className="close"
                variant="secondary"
                onClick={handleClose}
              >
                CANCEL
              </Button>
              <Button
                className="confirm"
                variant="primary"
                onClick={handleSubmit}
              >
                CONFIRM
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title>Remove Student</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>
                Are you sure you want to remove the current student from the
                list?
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button
                className="close"
                variant="secondary"
                onClick={handleClose}
              >
                CANCEL
              </Button>
              <Button
                // onSubmit={handleSubmit}
                className="Remove"
                variant="primary"
              >
                Remove
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}
