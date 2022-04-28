import React, { useState } from 'react'
import './project.css'
import projectsData from '../../constants/projectsData'
import Footer from './../../footer/footer'
import ReactPaginate from 'react-paginate'

function Project() {
    const [users, setUsers] = useState(projectsData.slice(0,4));
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
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
    <div className='main-project'>
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
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousClassName={"previousBtns"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
            </div>
        </div>
    </div>
        <Footer/>
</div>
)
}

export default Project