import { styled } from "styled-components";
import { footerHeight } from "../../shared/constants";

export const ContactView: React.FC = () => {
  return (
    <Wrapper>
      <Text>HAHAHAHAHA</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${footerHeight}px);
`;
const Text = styled.p`
  font-size: 22px;
  color: #333333;
  text-align: center;
  font-weight: bold;
`;
