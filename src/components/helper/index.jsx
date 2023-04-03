const handleScroll = (ref) => {
  document.querySelector(".drawer-content").scrollTo({
    top: ref.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

const renderItemAddress = (elem, i) => {
  return (
    <a
      href={elem.hrefLink}
      key={i}
      target="_blank"
      className="text-base md:text-xl lg:text-2xl font-normal  transition-color duration-300  hover:text-cerulean"
    >
      {elem.text}
    </a>
  );
};

export { handleScroll, renderItemAddress };
