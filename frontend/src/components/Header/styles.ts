import styled from 'styled-components';

export const Container = styled.div`
  background: #c72828;
  padding: 30px 0;

  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      margin-left: 5rem;
      height:5rem;
      a {
        display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        height:5rem;
        line-height:5rem;
        color:#fff;
  
        transition: color 0.2s;

        &:hover {
          color: green;
        }

        &.active{
          color: green;
          font-weight: bold;
        }    
      }   
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
