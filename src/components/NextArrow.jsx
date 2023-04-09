

function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className="slick-next" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="rounded-full" viewBox="0 0 24 24"><path d="M8.109 16.665l5.087-5.087L8.1 6.49c-.404-.404-.666-.938-.666-1.533s.262-1.129.666-1.533c.834-.834 2.18-.834 3.015 0l7 7c.404.404.666.938.666 1.533s-.262 1.129-.666 1.533l-7 7c-.404.404-.938.666-1.533.666-.596 0-1.129-.262-1.533-.666z"/></svg>
      </div>
    );
  }

  export default NextArrow
  