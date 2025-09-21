import React from "react";

const {VITE_ENVIRONMENT} = import.meta.env

const VersionBadge = () => {

  return (
    <div className="d-flex g-8 absolute right-4 bottom-8 py-4 px-8 bg-white border-2">

      <span>Environment: {VITE_ENVIRONMENT ?? 'localhost'} | Version: {__APP_VERSION__}</span>
    </div>
  )
}

export default VersionBadge