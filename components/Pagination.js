import React from 'react'

export default function Pagination({ pages, current, previous, setcurrentPage, next }) {

        const data = [];

        for (let i = 1; i <= pages; i++) {
                data.push(i);
        }
        return (
                <section className="pagination container">
                        <div className="pageno">
                                <p className="pageCount">
                                        {
                                                pages ?
                                                        `Page ${current} of ${pages}` : ''
                                        }
                                </p>
                        </div>
                        <div className="numbers">
                                {
                                        data.map((number) => {
                                                return <span key={number} onClick={() => { setcurrentPage(number) }} className={number === current ? 'pageNumber active' : 'pageNumber'}>{number}</span>
                                        })
                                }
                        </div>

                        <div className="nextButton">
                                {
                                        next && current <= pages ?
                                                <button className="button" onClick={() => { setcurrentPage(prev => prev + 1) }}>Next &gt;</button>
                                                :
                                                current == 1 ? '' :
                                                        <button className="button" onClick={() => { setcurrentPage(prev => prev - 1) }}>Previous &lt;</button>
                                }
                        </div>
                </section>
        )
}
