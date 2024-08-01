
<script>
  import { goto } from '$app/navigation';

  let studentID = '';
  let passcode = '';
  let stardewName = '';

  let authenticated = false;

  let invalidStudentID = false;
  let invalidPasscode = false;
  let invalidStardewName = false;

  function validate() {
    invalidStudentID = studentID !== '117153767';
    invalidPasscode = passcode !== '021702';
    invalidStardewName = stardewName.trim().toLowerCase() !== 'yunjin' && 
      stardewName.trim().toLowerCase() !== 'yun jin';
    if (!invalidStudentID && !invalidPasscode || !invalidStardewName) {
      authenticated = true;
      goto('/booboo');
    } 
  }

</script>

<main>
  <section class="w-full h-full flex items-center justify-center items-center">
    <div class="card bg-white w-full mx-5 md:w-1/2 min-h-2/3">
      <form on:submit|preventDefault={validate} class="flex justify-center items-center card-body">
        <h2 class="text-xl font-bold text-center pb-5">Not sure I believe you.</h2>
        <div class="flex flex-col w-full items-center md:w-1/2">
          <!-- phone number -->
          <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text">What's your student ID?</span>
            </div>
            <input bind:value={studentID} type="text" placeholder="Enter your ID" 
              class="input input-bordered w-full max-w-xs" 
              class:input-error={invalidStudentID}  
            />
            {#if invalidStudentID}
              <div class="label">
                <span class="text-error label-text-alt">Incorrect student ID!</span>
              </div>
            {/if}
          </label>

          <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text">What's your phone passcode?</span>
            </div>
            <input bind:value={passcode} type="password" placeholder="Enter your password" 
              class="input input-bordered w-full max-w-xs" 
              class:input-error={invalidPasscode}
            />
            {#if invalidPasscode}
              <div class="label">
                <span class="text-error label-text-alt">Incorrect password!</span>
              </div>
            {/if}
          </label>

          <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text">What's your name on our Stardew Valley save?</span>
            </div>
            <input bind:value={stardewName} type="text" placeholder="Enter the name" 
              class="input input-bordered w-full max-w-xs" 
              class:input-error={invalidStardewName}
            />
          </label>
          {#if invalidStardewName}
            <div class="label">
              <span class="text-error label-text-alt">Incorrect name! How could you?!</span>
            </div>
          {/if}

        </div>
        <button type="submit" class="btn btn-success mt-5">Submit</button>
      </form>
    </div>
  </section>
</main>