import React from 'react'

export default function Pagination() {
  return (
        <section className="pagination container">
                <div className="pageno">
                        <p className="pageCount">
                                Page 1 of 20
                        </p>
                </div>
                <div className="numbers">
                        <span className="pageNumber active">1</span>
                        <span className="pageNumber">2</span>
                        <span className="pageNumber">3</span>
                        <span className="pageNumber">4</span>
                        <span className="pageNumber">5</span>
                        <span className="pageNumber">6</span>
                </div>
                
                <div className="nextButton">
                        <button className="button">Next &gt;</button>
                </div>
        </section>
  )
}
