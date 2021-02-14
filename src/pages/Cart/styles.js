import styled from 'styled-components';

export const Container = styled.div`
  padding:30px;
  background:#fff;
  border-radius:5px;
  

  footer {
      margin-top:30px;
      display:flex;
      justify-content:space-between;
      align-items:center;

      button {
          background:#7159c1;
          color:#fff;
          border:0;
          border-radius:5px;
          padding:12px 20px;
          font-weight:bold;
          text-transform:uppercase;
          transition:ease all .2s;
          cursor: pointer;

          &:hover {
                background:#624bb1;
            }
      }
  }
`;

export const ProducTable = styled.div`
    width:100%;
    display: inline-table;

    thead th {
        color:#999;
        text-align:left;
        padding:12px;
    }

    tbody td {
        padding:20px;
        border-bottom: 1px solid #eee;
    }
    img {
        height:100px;
    }
    strong{
        color:#333;
        display:block;
    }

    span {
    margin-top:5px;
    font-size:18px;
    font-weight:bold;
    display:block;
    }

    div {
        display:flex;
        align-items:center;

        input {
            border:1px solid #ddd;
            border-radius:5px;
            color:#666;
            padding:6px;
            width:50px
        }
    }
    button {
        background:none;
        border: 0;
        padding:6px;
        cursor: pointer;
    }

`;

export const Total = styled.div`
    display:flex;
    align-items:baseline;
    
    span {
        color:#999;
        font-weight:bold;
    }

    strong {
        margin-left:5px;
        font-size:28px;
    }
`;