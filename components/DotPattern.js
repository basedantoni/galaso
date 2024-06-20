export default function DotPattern() {
    const initDots = () => {
        let content = [];
        for (let i = 0; i < 5120; i++) {
          content.push(<div key={i} className="bg-black/25 h-1 w-1 rounded-full"></div>);
        }
        return content;
      };

    return (
        <div className="absolute w-screen h-[400vh] flex flex-wrap content-start items-start gap-12 overflow-hidden">
            <div className="absolute w-screen h-[400vh] transparent-gradient"></div>
            {initDots()}
        </div>
    )
}