interface SlideScreenProps {
    title: string;
    content: string;
}

export default function SlideScreen({ title, content }: SlideScreenProps) {
    return (
        <div className="slidescreen flex flex-col gap-8">
            <div className="slide-screen bg-green-100 p-4 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">{text}</h2>
              <p className="text-lg">
                Explore the variety of products harvested by farmers.
              </p>
            </div>
        </div>
    );
}
    return(
        <div className="slidescreen flex flex-col gap-8">
            <div className="slide-screen bg-green-100 p-4 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">Harvested Products</h2>
              <p className="text-lg">
                Explore the variety of products harvested by farmers.
              </p>
            </div>
        </div>
    );
}