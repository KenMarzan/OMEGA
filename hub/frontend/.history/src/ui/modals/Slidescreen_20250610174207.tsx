import { SlideScreenProps } from "@/lib/definitions";

export default function SlideScreen({ title, content }: SlideScreenProps) {
    return (
        <div className="slidescreen flex flex-col gap-8">
            <div className="slide-screen bg-green-100 p-4 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-lg">
                    {cont}
              </p>
            </div>
        </div>
    );
}