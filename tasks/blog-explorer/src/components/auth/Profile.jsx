import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const user = useSelector(state => state.users.loggedInUser)

    return (
        <div>
            <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div class="card p-4">
                    <div class=" image d-flex flex-column justify-content-center align-items-center">
                        <button class="btn btn-secondary">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" height="100" width="100" />
                        </button> <span class="name mt-3">{user.name}</span>
                        <span class="idd">@{user.username}</span>
                        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                            <span class="idd1">Email: {user.email}</span> <span><i class="fa fa-copy"></i></span>
                        </div>
                        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                            <span class="idd1">Website: {user.website}</span> <span><i class="fa fa-copy"></i></span>
                        </div>
                        <div class=" d-flex mt-2"> <button class="btn btn-primary">Edit Profile</button> </div>

                        {/* <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                            <span><i class="fa fa-twitter"></i></span>
                            <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span>
                            <span><i class="fa fa-linkedin"></i></span> </div> <div class=" px-2 rounded mt-4 date ">
                            <span class="join">Joined May,2021</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
