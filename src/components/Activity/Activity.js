import React from 'react';
import { Link , Outlet} from 'react-router-dom';

function ActivityPage() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-4">
                    <Link className="btn btn-primary btn-lg btn-block" to="request">Request Proof</Link>
                </div>
                <div className="col-sm-4">
                    <Link className="btn btn-success btn-lg btn-block" to="received">Proofs Received</Link>
                </div>
                <div className="col-sm-4">
                    <Link className="btn btn-info btn-lg btn-block" to="send">Send Proof</Link>
                </div>
            </div>
            <div className="mt-5">
                <Outlet /> {/* Nested routes will render here */}
            </div>
        </div>
    );
}

export default ActivityPage;
