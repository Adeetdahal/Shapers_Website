import React, { useState } from 'react'
import './project.css'
import projectsData from '../../constants/projectsData'
import Footer from './../../footer/footer'
import ReactPaginate from 'react-paginate'

function Project() {
    const [users, setUsers] = useState(projectsData);
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 6;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = users.slice(pagesVisited,pagesVisited + usersPerPage )
    .map((projects,index) =>(
        <div className='listgrid'key={index}>
                <img src={projects.img} alt="ProjectSS" className='dummy-img'/>
                <h4 className='repo-title'>
                    {projects.title}
                </h4>
            </div>
    ));

    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

return (
<div>
    <div className='main-projects'>
        <div className="proj-desc">
            <div className="proj-text">
                <h2 className='proj-heading'>
                    Awareness And Ownership of a Green City
                </h2>
                <p className="proj-para">
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also 
                the leap into electronic typesetting, remaining 
                essentially unchanged.
                </p>
            </div>
            <div className="img660">
            <img src="https://dummyimage.com/600x400/000/fff" 
            alt="dummyImage" className='img600-400'/>
            </div>
        </div>
        <div className="all-projects">
            <h2 className='proj-heading2'>Number of Projects</h2>
            <div className='list-div'>
            {displayUsers}
            </div>
            <ReactPaginate
            nextLabel="next >"
            onPageChange={changePage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            />
        </div>
    </div>
        <Footer/>
</div>
)
}

export default Project