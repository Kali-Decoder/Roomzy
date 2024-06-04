import React from "react";

const ProfilePage = () => {
  return (
    <>
    <div className="container mx-auto">
      <div class="grid grid-cols-1 gap-5  p-2 sm:grid-cols-2 sm:p-10 lg:grid-cols-3">
      <div class="flex flex-col w-full p-4">
        <h1 class="mb-4 text-2xl font-bold text-gray-900">Profile</h1>
        <div
          id="profile-progress"
          class="w-52 h-52 mb-8 m-auto grid place-items-center text-4xl font-bold"
        >
          75%
        </div>
        <div class="font-bold text-center text-gray-900">
          75% of your profile is complete
        </div>
      </div>
        <div class="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p class="text-lg font-medium">Insights</p>
          <div class="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class="text-sm">Your views are up 400% since last month</p>
          </div>
          <div class="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class="text-sm">Your blog got featured on awwwards.com</p>
          </div>
          <div class="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam deserunt cupiditate ipsa.
            </p>
          </div>
          <div class="mt-4 flex items-center rounded-lg bg-gray-100 py-1 px-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-6 w-6 shrink-0 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div class="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p class="text-lg font-medium">Activity</p>
          <div class="flex items-center py-2">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
              alt="Simon Lewis"
            />
            <p class="ml-4 w-56">
              <strong class="block font-medium">Albert Mcalister</strong>
              <span class="text-xs text-gray-400">
                {" "}
                Commented on{" "}
                <a class="truncate font-medium text-indigo-600" href="#">
                  An Evening in the Woods
                </a>{" "}
              </span>
            </p>
          </div>
          <div class="flex items-center py-2">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/fR71TFZIDTv2jhvKsOMhC.png"
              alt=""
            />
            <p class="ml-4 w-56">
              <strong class="block font-medium">Samantha Ribbon</strong>
              <span class="text-xs text-gray-400">
                {" "}
                Commented on{" "}
                <a class="truncate font-medium text-indigo-600" href="#">
                  An Evening in the Woods
                </a>{" "}
              </span>
            </p>
          </div>
          <div class="flex items-center py-2">
            <img
              class="h-10 w-10 rounded-full object-cover"
              src="/images/R-Wx_NHvZBci3KLrgXhp1.png"
              alt=""
            />
            <p class="ml-4 w-56">
              <strong class="block font-medium">Dr. Kayla</strong>
              <span class="text-xs text-gray-400">
                {" "}
                Commented on{" "}
                <a class="truncate font-medium text-indigo-600" href="#">
                  An Evening in the Woods
                </a>{" "}
              </span>
            </p>
          </div>
        </div>

        <div class="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p class="text-lg font-medium">Traffic Sources</p>
          <div class="mt-4">
            <p class="float-left mb-2">Direct</p>
            <span class="float-right mb-2">20,00</span>
            <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div class="h-full w-10/12 overflow-hidden rounded-full bg-indigo-600"></div>
            </div>
          </div>
          <div class="mt-4">
            <p class="float-left mb-2">Referral</p>
            <span class="float-right mb-2">2,000</span>
            <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div class="h-full w-4/12 overflow-hidden rounded-full bg-indigo-600"></div>
            </div>
          </div>
          <div class="mt-4">
            <p class="float-left mb-2">Google</p>
            <span class="float-right mb-2">1,500</span>
            <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div class="h-full w-3/12 overflow-hidden rounded-full bg-indigo-600"></div>
            </div>
          </div>
          <div class="mt-4">
            <p class="float-left mb-2">Facebook</p>
            <span class="float-right mb-2">260</span>
            <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
              <div class="h-full w-1/12 overflow-hidden rounded-full bg-indigo-600"></div>
            </div>
          </div>
        </div>
        
      </div>

      
      </div>


    </>
  );
};

export default ProfilePage;
