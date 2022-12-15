import { TokoBuahList } from "../components/tokobuah/tokobuah";

export default function PageTokoBuah() {


    return (
        <div className="template-tokobuah">
            <div>
            <h1>Toko Buah</h1>
            </div>
            <div className="template-sub-tokobuah">
         <TokoBuahList />
        </div>
        </div>
    )
}