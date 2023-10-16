export default function SelectLiked() {

    return (
      <div id="selectLikedContainer">
        <div>
            <div class="dropdown selectLeft">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="selectedTitle">관심 지역</span>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">방문 지역</a></li>
                </ul>
            </div>

            <div>
                <select class="form-select selectRight" aria-label="Small select example">
                    <option selected><span className="selectedRegion">지역 선택</span></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
      </div>
    )
  }