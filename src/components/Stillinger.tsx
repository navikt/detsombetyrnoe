import { StillingI } from "src/app/(site)/page";
import Stilling from "./stilling";
import styled from "styled-components";

const Style = styled.div`
  > * {
    max-width: 32.5rem;
  }
  ul {
    margin-top: 4rem;
  }
  h2 {
    padding: 2vmin;
  }
`;

const Stillinger = ({ stillinger }: { stillinger: StillingI[] }) => {
  if (!stillinger?.length) {
    return (
      <Style>
        <h2 id="ledige-stillinger">Er du nysgjerrig på å jobbe i NAV IT?</h2>
        <p>
          Vi har for tiden ingen ledige stillinger, men fortvil ikke! Vi er stadig på jakt etter nye kollegaer og da
          blir stillingsannonsene lagt ut her.
        </p>
      </Style>
    );
  }

  return (
    <Style>
      <h2 id="ledige-stillinger">Ledige stillinger</h2>
      <ul>
        {stillinger.map((stilling) => (
          <Stilling key={stilling.title} {...stilling} />
        ))}
      </ul>
    </Style>
  );
};

export default Stillinger;
