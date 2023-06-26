import { ContentRowTop } from "./ContentRowTop";
import { Footer } from "./Footer";
import { Table } from "./Table";
import { TopBar } from "./TopBar";



export const ContentWrapper = () => {
    return (
        <>
        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
        <TopBar />
        <ContentRowTop />
        <section>
            <Table/>
        </section>
        <Footer />
        </div>
        </div>
        </>
    )
}